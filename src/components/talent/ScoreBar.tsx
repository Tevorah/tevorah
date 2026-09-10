interface ScoreBarProps {
  label: string;
  score: number;
}

export default function ScoreBar({ label, score }: ScoreBarProps) {
  const color =
    score >= 90 ? "#3DDC97" : score >= 80 ? "#45DDF5" : "#7C5CFF";

  return (
    <div className="flex items-center justify-between text-xs gap-3">
      <span className="w-24 flex-shrink-0" style={{ color: "#707887" }}>
        {label}
      </span>
      <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>
      <span className="font-semibold text-midnight w-6 text-right">{score}</span>
    </div>
  );
}
