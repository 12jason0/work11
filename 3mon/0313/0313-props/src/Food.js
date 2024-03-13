export default function Like({ food }) {
  const color = {
    color: 'orange',
  };
  return (
    <div>
      좋아하는 음식 <span style={color}>{food}</span>
    </div>
  );
}

Like.defaultProps = {
  food: '딸기',
};
