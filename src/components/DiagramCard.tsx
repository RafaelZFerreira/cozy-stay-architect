
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DiagramCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const DiagramCard = ({ title, description, children, className }: DiagramCardProps) => {
  return (
    <Card className={cn("w-full overflow-hidden", className)}>
      <CardHeader className="bg-hotel-50">
        <CardTitle className="text-hotel-700">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 overflow-auto">
        {children}
      </CardContent>
    </Card>
  );
};

export default DiagramCard;
