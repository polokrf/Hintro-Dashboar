
export const formatDuration = seconds => {
  if (!seconds || seconds <= 0) return 0;

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // If hours exist
  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
  }

  return `${minutes}m ${secs}s`;
};

export const formatLastSession = (dateString) => {
  if (!dateString) {
    return 0
  }
  const now = new Date();
  const sessionDate = new Date(dateString);

  const diffMs = now - sessionDate;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (seconds < 60) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  

 
  return `${days} day${days > 1 ? 's' : ''} ago`;
};


