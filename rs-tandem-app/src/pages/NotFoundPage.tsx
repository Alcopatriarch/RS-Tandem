import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/common/Loading.tsx";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-dark-gunmetal px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-american-silver">404</h1>
        <p className="mt-5 text-4xl font-semibold text-american-silver">
          Страница не найдена
        </p>
        <p className="mt-5 text-2xl text-american-silver">
          Cтраница была удалена или вы ввели неправильный адрес.
        </p>
        <button
          type="button"
          className="inline-flex items-center text-2xl mt-5 px-8 py-3 bg-american-blue text-white rounded-xl hover:bg-independence transition"
          onClick={() => {
            navigate("/");
          }}
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
