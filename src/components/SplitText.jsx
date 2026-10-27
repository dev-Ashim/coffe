// Splits a title into letters that drop in one after another.
// Use "\n" in `text` for line breaks.
export default function SplitText({ text, as: Tag = "h1", className = "", step = 28, lineClass = {} }) {
  let n = 0;
  return (
    <Tag className={`split ${className}`} aria-label={text.replace(/\n/g, " ")}>
      {text.split("\n").map((line, li) => (
        <span className={`split__line ${lineClass[li] ?? ""}`} key={li} aria-hidden="true">
          {line.split(" ").map((word, wi) => (
            <span key={wi}>
              {wi > 0 && " "}
              <span className="split__word">
              {[...word].map((ch, ci) => (
                <span className="split__char" key={ci} style={{ "--d": `${n++ * step}ms` }}>
                  {ch}
                </span>
              ))}
              </span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
