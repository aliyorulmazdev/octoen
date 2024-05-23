import PropTypes from 'prop-types';

export default function NotificationComponent({ notifications }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg border-0">
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold text-start pl-4 text-blue-900">BİLDİRİMLER</h2>
        <ul className="space-y-3">
          {notifications.map((notification, index) => (
            <li key={index} className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <BellIcon className="flex-shrink-0 w-6 h-6 text-yellow-400" />
                <div className="flex-1 space-y-1">
                  <p className="text-xs font-medium text-gray-300">{notification.message}</p>
                </div>
              </div>
              <p className="text-xs font-bold text-gray-400">{notification.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

NotificationComponent.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
