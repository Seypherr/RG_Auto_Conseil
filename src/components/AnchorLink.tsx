import { Link, useLocation, useNavigate } from 'react-router-dom';
import { parseAnchorTarget, scrollToAnchor } from '../utils/anchorNavigation';

export default function AnchorLink({ activeClassName, className, onClick, to, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, hash, targetId } = parseAnchorTarget(to);
  const isActive = location.pathname === pathname;

  const resolvedClassName =
    typeof className === 'function'
      ? className({ isActive })
      : [className, isActive && activeClassName].filter(Boolean).join(' ');

  const handleClick = (event) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (!hash || location.pathname !== pathname) {
      return;
    }

    event.preventDefault();

    if (location.hash !== hash) {
      navigate(`${pathname}${hash}`);
    }

    window.requestAnimationFrame(() => {
      scrollToAnchor(targetId);
      window.setTimeout(() => scrollToAnchor(targetId), 120);
    });
  };

  return <Link {...props} className={resolvedClassName} onClick={handleClick} to={to} />;
}
