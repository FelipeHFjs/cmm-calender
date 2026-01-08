export default function Preacher({
  name,
  data,
}: {
  name: string;
  data: string;
}) {
  return (
    <div>
      <p>
        <strong>{name}:</strong> {data}
      </p>
    </div>
  );
}
