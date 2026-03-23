type LoadingProps = {
  type?: "spinner" | "text" | "skeleton";
};

const Loading = ({ type = "spinner" }: LoadingProps) => {
  if (type === "text") {
    return <p>Загрузка...</p>;
  }

  if (type === "skeleton") {
    return (
      <div>
        <div className="skeleton title" />
        <div className="skeleton text" />
        <div className="skeleton text" />
      </div>
    );
  }

  // default spinner
  return <div className="spinner" />;
};

export default Loading;
