function HeroTitle({ title }) {
  return (
    <div className="heroTitle">
      <h1>
        <div
          className="decoration decoration-left"
          style={{ margin: "10px 8px" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {title}
        <div className="heroTitleFlag">🚩</div>
        <div
          className="decoration decoration-right"
          style={{ margin: "10px 8px" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </h1>
      <p className="heroDescription">
        <span>🤓</span>
        <span>!</span>
        متنتو وارد کن تا ببینیم توی رابطه ات چه رد فلگایی وجود داره
      </p>
    </div>
  );
}

export default HeroTitle;
