import { memo, useEffect, useRef } from 'react';
import gsap from 'gsap';
// @ts-ignore
import { Circle, Container } from './Spiders.styles';

const Spiders = ({ containerRef }: any) => {
  const canvas = useRef<any>(null);
  const points = useRef<any>([]);
  const position = useRef<any>({
    x: 0,
    y: 0,
  });
  let lastMousePosition = { x: null, y: null };
  const directionRef = useRef<any>(true);
  const intervalRef = useRef<any>(null);
  const isAnimatingRef = useRef<any>(false);
  const resizeObserverRef = useRef<any>(null);  // Flag to track if wave is in progress
  const initial = useRef<any>(true);

  function debounce(func: any, delay: any) {
    let timeoutId: any;
    return function (...args: any) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        // @ts-ignore
        func.apply(this, args);
      }, delay);
    };
  }

  // Debounced _onResize function
  const debouncedOnResize = debounce(() => {
    _onResize();
  }, 200); // Adjust the delay as needed


  useEffect(() => {
    // if ('ontouchstart' in window) {
    //   // Ignore mobile
    //   return;
    // }

    if (containerRef && containerRef.current) {
      _updateSize();
      _createPoints();
      _animate();
      _startWaveMovement(); // Start wave movement only once after setup

      window.addEventListener('mousemove', _onMouseMove);

      return () => {
        console.log('Cleanup - initial setup');
        window.removeEventListener('mousemove', _onMouseMove);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, []); // Empty dependency array ensures this runs only once when mounted

  // Resize observer effect (runs when containerRef changes)
  useEffect(() => {
    if ('ontouchstart' in window) {
      return;
    }

    if (containerRef && containerRef.current) {
      // Remove previous observer if it exists
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }

      // ResizeObserver to handle container resizing
      resizeObserverRef.current = new ResizeObserver(() => {
        debouncedOnResize();
      });
      resizeObserverRef.current.observe(containerRef.current);

      return () => {
        console.log('Cleanup - resize observer');
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }
      };
    }
  }, [containerRef]);

  const _onResize = () => {
    _updateSize();
    _createPoints();
    updatePosition();
  };

  const _updateSize = () => {
    if (canvas.current && containerRef && containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvas.current.width = width;
      canvas.current.height = height;
    }
  };

  const updatePosition = () => {
    if (initial.current) {
      position.current = { x: 0, y: canvas.current.height / 2 };
      initial.current = false;
      return;
    }
    if (lastMousePosition.x !== null && lastMousePosition.y !== null) {
      console.log('Updating position');
      position.current = { x: lastMousePosition.x, y: lastMousePosition.y };
    } else {
      console.log("hiding web")
      position.current = { x: -200, y: -200 };
    }
  };

  const _onMouseMove = (e: any) => {
    lastMousePosition = {
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    };
    if (isAnimatingRef.current) {
      return;
    }
    position.current = {
      x: lastMousePosition.x,
      y: lastMousePosition.y,
    };
  };

  const _createPoints = () => {
    points.current = [];
    const { width, height } = canvas.current;

    const noiseFactor: any = Math.min(width / 50, 20);
    for (let x = 0; x < width; x += width / noiseFactor) {
      for (let y = 0; y < height; y += height / noiseFactor) {
        const px = x + (Math.random() * width) / noiseFactor;
        const py = y + (Math.random() * height) / noiseFactor;
        points.current.push({
          x: px,
          originX: px,
          y: py,
          originY: py,
          opacity: 0, // Start with 0 opacity for the wave effect
        });
      }
    }

    // for each point find the 5 closest points
    for (let i = 0; i < points.current.length; i++) {
      const closest = [];
      const p1 = points.current[i];

      for (let j = 0; j < points.current.length; j++) {
        const p2 = points.current[j];

        if (!(p1 === p2)) {
          let placed = false;

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    const ctx = canvas.current.getContext('2d');
    for (const i in points.current) {
      const point = points.current[i];
      point.circle = new Circle(
        ctx,
        points.current[i],
        2 + Math.random() * 2,
        'rgba(255,255,255,0.15)'
      );
      _shiftPoint(point);
    }
  };

  const _shiftPoint = (point: any) => {
    const duration = 1 + Math.random() * 2;
    const x = point.originX - 50 + Math.random() * 100;
    const y = point.originY - 50 + Math.random() * 100;
    const onComplete = () => _shiftPoint(point);
    gsap.timeline().to(point, { x, y, onComplete }).duration(duration);
  };

  const _animate = () => {
    const { width, height } = canvas.current;
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    for (const i in points.current) {
      const distanceFromCursor = Math.abs(
        getDistance(position.current, points.current[i])
      );
      if (distanceFromCursor < 4000) {
        points.current[i].opacity = 0.15;
        points.current[i].circle.opacity = 0.3;
      } else if (distanceFromCursor < 20000) {
        points.current[i].opacity = 0.05;
        points.current[i].circle.opacity = 0.15;
      } else if (distanceFromCursor < 40000) {
        points.current[i].opacity = 0.01;
        points.current[i].circle.opacity = 0.05;
      } else {
        points.current[i].opacity = 0;
        points.current[i].circle.opacity = 0;
      }
      _drawLines(points.current[i]);
      points.current[i].circle.draw();
    }

    requestAnimationFrame(() => _animate());
  };

  const _startWaveMovement = () => {
    const { width } = canvas.current;
    position.current.x = 0;
    isAnimatingRef.current = true;


    intervalRef.current = setInterval(() => {
      if (directionRef.current) {
        position.current.x += width * 0.1;
        if (position.current.x >= width) {
          directionRef.current = false;
        }
      } else {
        position.current.x -= width * 0.1;
        if (position.current.x <= -200) {
          directionRef.current = true;

          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            isAnimatingRef.current = false;

            updatePosition();
          }
        }
      }
    }, 100);
  };

  const _drawLines = (point: any) => {
    if (!point.opacity) {
      return;
    }
    const ctx = canvas.current.getContext('2d');
    for (const i in point.closest) {
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(point.closest[i].x, point.closest[i].y);
      ctx.strokeStyle = `rgba(255,255,255,${point.opacity})`;
      ctx.stroke();
    }
  };


  return <Container className={"spiders"} ref={canvas} />;
};

function getDistance(p1: any, p2: any) {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

export default memo(Spiders);