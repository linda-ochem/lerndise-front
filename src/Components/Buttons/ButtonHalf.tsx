interface Props {
  children: string;
  skin?: 'lerndis-black-pearl';
  color?: 'white' | 'lerndis-black-pearl';
}

const ButtonHalf = ({ children, skin, color = 'lerndis-black-pearl' }: Props) => {
  return (
    <button className={`bg-${skin} w-1/2 py-[14px] px-[10px] border-[0.8px] border-solid border-lerndis-black-pearl rounded-[40px] font-body text-xs text-${color}`}>
      {children}
    </button>
  );
};

export default ButtonHalf;
