export default function Array({ name, data }: { name: string; data: any[] }) {
  return (
    <div>
      <h4>
        {name}: {!data || data.length === 0 ? " N/A" : ""}
      </h4>
      {data && (
        <ul>
          {data.map((d: any, index: number) => (
            <li key={index}>
              {d.name}{" "}
              {d.ort ? (
                <>
                  <strong>Ort:</strong> {d.ort}
                </>
              ) : (
                ""
              )}
              {d.icon && <> {d.icon}</>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
