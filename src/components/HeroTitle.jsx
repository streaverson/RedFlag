function HeroTitle({ title }) {
  return (
    <div className="heroTitle">
      <h1>
        <div
          className="decoration decoration-left"
          style={{ margin: "10px 20px" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="heroTitleFlag">🚩</div>
        {title}
        <div
          className="decoration decoration-right"
          style={{ margin: "10px 30px" }}
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
