const styles = {
  High: "border-rose-500/40 bg-rose-500/10 text-rose-400",
  Medium: "border-orange-500/40 bg-orange-500/10 text-orange-400",
  Low: "border-purple-500/40 bg-purple-500/10 text-purple-400",
};

const PriorityBadge = ({ priority }) => {
  return (
    <span className={`rounded-full border px-2 py-0.5 text-[11px] ${styles[priority]}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;