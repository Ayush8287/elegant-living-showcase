
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Logo';

const Navbar = () => {

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Logo />
          
          
          {/* Action Items */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;
