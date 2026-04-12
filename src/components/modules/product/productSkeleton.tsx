// components/ProductSkeleton.tsx
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <Card className="p-1 flex flex-col gap-3 border-none">
      {/* ইমেজ প্লেসহোল্ডারের রঙ bg-pink-200 সেট করা হয়েছে */}
      <Skeleton className="w-full h-50 sm:h-60 rounded-md bg-pink-200" />
      
      <div className="space-y-2 p-2">
        {/* টাইটেলের প্লেসহোল্ডারেও রঙ যোগ করা হয়েছে */}
        <Skeleton className="h-4 w-3/4 bg-pink-100" />
        
        {/* bg-white সরিয়ে গোলাপি রঙ এবং shadow-2xl সেট করা হয়েছে */}
        <Skeleton className="h-4 w-1/2 bg-pink-200 shadow-2xl" />
      </div>
    </Card>
  );
}