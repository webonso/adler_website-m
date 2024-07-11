import ConnectCards from '@/components/AllCards';
import WeeklyDeals from "@/components/WeekDeals";
import BookingWrapper from "./BookingWrapper";
import CommonLayout from '@/components/CommonLayout';

export default function BookingLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <CommonLayout>
        <BookingWrapper>
            {children}
        </BookingWrapper>
      
        </CommonLayout>
      
        <div className="min-h-screen w-screen h-full items-center justify-center">
        <WeeklyDeals />
        <ConnectCards />
      </div>
      </body>
      </html>
    );
  }