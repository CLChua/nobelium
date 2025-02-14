import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <a>
      <p className="mr-1">
        #{tag}
      </p>
    </a>
  </Link>
);

export default TagItem