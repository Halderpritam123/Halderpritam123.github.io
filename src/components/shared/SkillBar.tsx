interface SkillBarProps {
  label: string
  percentage: number
  animated: boolean
}

export function SkillBar({ label, percentage, animated }: SkillBarProps) {
  const clamped = Math.min(100, Math.max(0, percentage))

  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-th-text text-sm font-medium">{label}</span>
        <span className="text-th-accent text-sm font-semibold">{clamped}%</span>
      </div>
      <div className="bg-th-border h-2 rounded-full overflow-hidden">
        <div
          className="bg-th-accent h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: animated ? `${clamped}%` : '0%' }}
        />
      </div>
    </div>
  )
}
