import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen p-6 overflow-auto bg-gray-800 text-white">
      <div className="text-2xl font-bold mb-6">Charts</div>
      {routes.map((route) => {
        if (route.children && route.name !== 'Home') {
          return (
            <Accordion key={route.name} type="single" collapsible>
              <AccordionItem value={route.name}>
                <AccordionTrigger>{route.name}</AccordionTrigger>
                <AccordionContent>
                  {route.children.map((childRoute) => {
                    return (
                      <NavLink
                        key={childRoute.name}
                        to={childRoute.path}
                        className={({ isActive }) =>
                          `p-2 hover:text-gray-400 block text-left ${isActive && 'text-gray-400'}`
                        }
                      >
                        {childRoute.name}
                      </NavLink>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }
        return (
          <NavLink
            key={route.name}
            to={route.path}
            className={({ isActive }) => `p-2 hover:text-gray-400 ${isActive && 'text-gray-400'}`}
          >
            {route.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
