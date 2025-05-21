export default function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Contact Me
      </h1>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Name:</strong> Basudev Gorai
      </p>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Phone:</strong> 8537086882
      </p>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Email:</strong> 542001basudevgorai@gmail.com
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-800 dark:text-gray-100">
        Other Projects
      </h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>
          <a
            href="https://basudevgorai.github.io/"
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            My portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/basudevgorai"
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            other-projects
          </a>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
}
