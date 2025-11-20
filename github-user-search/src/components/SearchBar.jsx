export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search GitHub user..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
