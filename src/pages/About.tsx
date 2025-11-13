export default function About() {
  return (
    <div className="flex flex-row items-center justify-center gap-7 w-full max-w-4xl mx-auto h-full">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src="/assets/avatar.png"
          alt="avatar"
          className="w-48 h-48 rounded-sm object-cover"
        />
      </div>

      {/* Bio Text */}
      <div className="flex items-center gap-1">
        <p className="text-text-strong font-mono font-normal text-base capitalize leading-6">
          A driven student at 1337BG (42 Network), passionate about Cybersecurity 
          and exploring DevOps. With a solid base in scripting and systems, I enjoy 
          uncovering how things work under the hood and securing them, while embracing 
          42's peer-learning philosophy.
        </p>
      </div>
    </div>
  );
}