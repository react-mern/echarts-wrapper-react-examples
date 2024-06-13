import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Suspense } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

const RootLayout = () => {
  return (
    <div className="flex md:flex-row flex-col max-h-screen">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block md:w-2/6 lg:w-1/5">
        <Sidebar />
      </div>

      {/* Sheet for smaller screens */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-4">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side={'left'} className="p-0">
            <SheetHeader>
              <SheetDescription>
                <Sidebar />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="lg:w-4/5 md:w-4/6 w-full h-screen overflow-auto flex flex-col">
        <Suspense fallback={'loading'}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default RootLayout;
