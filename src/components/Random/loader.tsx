const PWLoader = ({loaded}: any) => (
    <div id='loading-container' className={loaded}>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
);

export default PWLoader;