import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';

import CodeIcon from '@/icons/CodeIcon';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

interface DrawerProps {
    children: string;
}

const Drawer = ({ children }: DrawerProps) => {
    SyntaxHighlighter.registerLanguage('javascript', js);
    return (
        <Sheet>
            <SheetTrigger className="bg-gray-800 text-white ms-auto rounded m-1.5 w-fit px-2 py-1">
                <CodeIcon />
            </SheetTrigger>
            <SheetContent className="md:w-fit md:max-w-full w-full overflow-auto">
                <SheetHeader>
                    <SheetDescription className="overflow-auto max-w-screen">
                        <SyntaxHighlighter wrapLines language="javascript" style={docco}>
                            {children}
                        </SyntaxHighlighter>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default Drawer;
