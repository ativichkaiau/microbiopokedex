// Ambient backdrop: three large, slowly drifting, blurred color blobs that
// sit behind all content (z-index: -1). Styling/animation live in globals.css.
export default function Atmosphere() {
  return (
    <div aria-hidden className="atmosphere">
      <span className="blob blob-1" />
      <span className="blob blob-2" />
      <span className="blob blob-3" />
    </div>
  );
}
