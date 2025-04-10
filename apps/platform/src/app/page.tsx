import { TypographyH1 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="p-4">
      <TypographyH1>Page content</TypographyH1>
      <Button variant="destructive" size="lg" className="mt-5">
        Danger!
      </Button>
    </div>
  );
}
