import './Glitch.css';

export default function ({ text }: { text: string }) {
	return (
		<p className="glitch" tabIndex={0}>
			{text}
		</p>
	);
}
