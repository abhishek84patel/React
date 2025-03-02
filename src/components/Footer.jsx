const Footer = () => {
    return (
      <footer className="bg-black bg-[url(https://radiant.tailwindui.com/dot-texture.svg)]">
        <div className="container px-6 py-12 mx-auto">
          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {footerData.map((section, index) => (
              <div key={index}>
                <p className="font-semibold text-[22px] text-white">{section.title}</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  {section.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
              <img className="w-auto h-7 invert" src="https://grin.co/wp-content/uploads/2022/11/2022_GRIN_Logo_Black_Transparent-Bkgnd-small.webp" alt="Logo" />
            </a>
            <p className="mt-4 text-sm text-white sm:mt-0">© Copyright 2024. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  const footerData = [
    {
      title: "About",
      links: [
        { text: "Our company", href: "#" },
        { text: "Core Team", href: "#" },
        { text: "Career", href: "#" },
        { text: "CSR", href: "#" },
        { text: "How We Work", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "iOS App Development", href: "#" },
        { text: "Android App Development", href: "#" },
        { text: "Software Development", href: "#" },
        { text: "Ideation & Design", href: "#" },
        { text: "Mobile App Dev", href: "#" },
        { text: "Research & Innovation", href: "#" },
        { text: "Digital Transformation", href: "#" },
      ],
    },
    {
      title: "Technologies",
      links: [
        { text: "Blockchain", href: "#" },
        { text: "Artificial Intelligence", href: "#" },
        { text: "AR and VR", href: "#" },
        { text: "Cloud Computing", href: "#" },
        { text: "Internet of Things", href: "#" },
        { text: "Metaverse Development", href: "#" },
        { text: "NFT Development", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { text: "+880 768 473 4978", href: "#" },
        { text: "info@merakiui.com", href: "#" },
      ],
    },
  ];
  
  export default Footer;
  