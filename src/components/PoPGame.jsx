import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const GAME_SRC = `${import.meta.env.BASE_URL}unity/PoP/index.html`;

export default function PoPGame() {
  const navigate = useNavigate();

  // Go back to wherever the visitor came from; fall back to home on a direct visit.
  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate("/", { replace: true });
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-[#07060d] text-white">
      <Helmet>
        <title>Plight of Proteus | Ghiasy Alexandre</title>
      </Helmet>
      <header className="flex items-center gap-4 px-4 py-2 border-b border-white/20">
        <button
          type="button"
          onClick={goBack}
          className="px-3 py-1 rounded-lg border border-white hover:shadow-neonLightSlim transition-all duration-300"
          aria-label="Back to portfolio"
        >
          ← Back
        </button>
        <h1 className="text-lg sm:text-xl font-semibold">Plight of Proteus</h1>
      </header>
      <iframe
        src={GAME_SRC}
        title="Plight of Proteus"
        className="flex-1 w-full border-0"
        allow="fullscreen; autoplay; gamepad; screen-wake-lock"
        allowFullScreen
      />
    </div>
  );
}
