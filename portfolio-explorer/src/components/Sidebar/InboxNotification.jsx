function InboxNotification({ count }) {
  return (
    <div className="absolute right-6 bg-notification text-white w-6 h-6 rounded-full text-sm font-medium flex items-center justify-center">
      {count}
    </div>
  );
}

export default InboxNotification;
