import {useTheme} from '../Context/ThemeContext'



function Header () {

  const {theme, ChangeTheme} = useTheme();
  return (

    <header className="flex justify-between items-centre px-6 py-4 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md flex-wrap">
    <div className="text-xl font-bold">Theme Switcher</div>
    
    {theme !== "dark" &&(
    <nav className = "transition-all duration-300 hover:text-[var(--accent-color)]">
    <a href="/" className="hover:text-[var(--accent-color)]">Home</a>
    <a href="/about" className="hover:text-[var(--accent-color)]">About</a>  
    <a href="/" className="hover:text-[var(--accent-color)]">Contact</a>
    </nav>
    )}

  <select value={theme} onChange= {(e) => ChangeTheme(e.target.value)}
    className= "appearance-none bg-[var(--dropdown-bg)] text-[var(--dropdown-text)] border border-[var(--accent-color)] px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all duration-300 hover:scale-105">
    <option value="light">Light Theme</option>
    <option value="dark">Dark Theme</option>
    <option value="monokai">Monokai theme</option>
  </select>

    </header>
  );
}

export default Header;