import './Version.css';

export default function ({ versionNumber }: { versionNumber: string }) {
	return <p className="version">{versionNumber}</p>;
}
