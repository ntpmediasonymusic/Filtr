/* eslint-disable react/prop-types */
function SaveIcon({ width = "21", height = "22", color = "#00DAF0" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 18.3889V3.61111C1 2.44518 1.94518 1.5 3.11111 1.5H14.9034C15.4632 1.5 16.0002 1.72242 16.3961 2.11833L19.3817 5.10389C19.7776 5.49981 20 6.03677 20 6.59668V18.3889C20 19.5549 19.0549 20.5 17.8889 20.5H3.11111C1.94518 20.5 1 19.5549 1 18.3889Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M6.91117 7.83333H14.0889C14.4388 7.83333 14.7223 7.54978 14.7223 7.2V2.13333C14.7223 1.78355 14.4388 1.5 14.0889 1.5H6.91117C6.56139 1.5 6.27783 1.78355 6.27783 2.13333V7.2C6.27783 7.54978 6.56139 7.83333 6.91117 7.83333Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M4.16663 12.689V20.5001H16.8333V12.689C16.8333 12.3392 16.5498 12.0557 16.2 12.0557H4.79996C4.45018 12.0557 4.16663 12.3392 4.16663 12.689Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default SaveIcon;
