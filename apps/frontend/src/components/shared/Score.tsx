import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

export interface ScoreProps {
  value: number;
  qtyScore: number;
}

export default function Score(props: ScoreProps) {
  const { value: score, qtyScore } = props;

  const estrelas = Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;

    if (score >= value) {
      return <IconStarFilled key={index} size={18} />;
    }
    if (score + 1 > value) {
      return <IconStarHalfFilled key={index} size={18} />;
    }

    return <IconStar key={index} size={18} />;
  });

  return (
    <div className="flex items-end gap-2">
      <div className="flex items-center gap-1 text-yellow-400">{estrelas}</div>

      <div className="flex text-xs text-zinc-300">({qtyScore})</div>
    </div>
  );
}
