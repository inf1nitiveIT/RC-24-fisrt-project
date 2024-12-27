import { links } from '../../utils/const';

type MobileMenuProps = {
  onClose: () => void;
};

function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Кнопка закрытия */}
      <button
        className="absolute top-4 right-4 text-3xl text-gray-700"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Ссылки */}
      <nav className="flex flex-col mt-20">
        {links.map((link) => (
          <a
            href={link.to}
            key={link.id}
            className="text-2xl font-semibold text-gray-900 py-4 px-6 text-center hover:bg-gray-200 w-full"
            onClick={onClose} // Закрывать меню при переходе
          >
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default MobileMenu;
