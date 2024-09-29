import { useState } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { CircleHelp } from 'lucide-react';

export type TooltipHoverCardProps = {
  text: string;
};

export const TooltipHoverCard = ({ text }: TooltipHoverCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTooltip = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger onClick={toggleTooltip}>
        <div>
          <CircleHelp size={12} className="ml-1 cursor-pointer" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>{text}</HoverCardContent>
    </HoverCard>
  );
};
