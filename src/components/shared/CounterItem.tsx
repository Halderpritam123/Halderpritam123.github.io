import { useCountUp } from '@/hooks/useCountUp'

interface CounterItemProps {
  icon: React.ReactNode
  target: number
  label: string
  suffix?: string
  enabled: boolean
}

export function CounterItem({ icon, target, label, suffix = '', enabled }: CounterItemProps) {
  const count = useCountUp({ target, duration: 2000, enabled })

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-th-accent mb-3 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-4xl font-bold text-th-text mb-1">
        {count}<span className="text-th-accent">{suffix}</span>
      </div>
      <p className="text-th-muted text-sm uppercase tracking-wider">{label}</p>
    </div>
  )
}
