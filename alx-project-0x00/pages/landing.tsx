import Card from "@/components/Card"
import Button from "@/components/Button";

const sizes = {
  small: "text-xs px-0 py-1 h-8",
  medium: "text-base px-0 py-2 h-10",
  large: "text-lg px-0 py-3 h-12",
};

const shapes = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
  "rounded-lg": "rounded-lg",
};

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card /> <Card /> <Card />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "200px",
            alignItems: "center",
            padding: "16px 0",
          }}
        >
          {Object.entries(sizes).map(([sizeName, sizeClass]) =>
            Object.entries(shapes).map(([shapeName, shapeClass]) => (
              <Button
                key={`${sizeName}-${shapeName}`}
                title={`${sizeName} ${shapeName}`}
                className={`${sizeClass} ${shapeClass}`}
              />
            ))
          )}
      </div>
    </div>
  )
}
export default Landing
