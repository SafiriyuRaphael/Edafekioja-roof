const TikTokIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    style={{
      display: 'block', // Ensures no extra margins/padding
      maxWidth: '100%', // Makes it responsive
    }}
  >
    <path d="M12 2v15c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c.34 0 .67.03 1 .09V13c-.33-.06-.66-.09-1-.09-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V2h3c0 2.21 1.79 4 4 4h2V7.5h-2c-2.76 0-5-2.24-5-5z" />
  </svg>
);

export default TikTokIcon;
