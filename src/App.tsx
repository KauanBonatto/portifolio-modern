import { Fragment } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { ArrowUpRight, Image } from 'lucide-react';

function App() {
  return (
    <Fragment>
      <section id='hero' className='flex justify-center p-16'>
        <div className='w-5/6 bg-amber-300'>
          <header className="w-5/6 flex items-center justify-between px-8 py-6">
            <div className="flex items-center gap-3">
              <div className='logo'>
                <h1 className="text-2xl font-light">
                  KAUAN<span className="font-extrabold">BONATTO</span>
                </h1>
                <p className="text-sm tracking-wide font-extralight">
                  FULL STACK DEVELOPER
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="rounded-full py-3 px-12 border-3 border-primary-500 bg-primary-400 text-md font-normal hover:cursor-pointer hover:opacity-90 hover:scale-105"
            >
              Contact me <ArrowUpRight className="size-5" />
            </Button>
          </header>

          <div>
            <Image />
            <img className='rounded-full' src='./assets/image.png' />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
