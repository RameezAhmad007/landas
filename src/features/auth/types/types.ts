export interface InputState {
  value: string;
  showError: string;
}

export interface PasswordState extends InputState {
  showMessage: boolean;
}

export interface LoginFormProps {
  id: InputState;
  setId: React.Dispatch<React.SetStateAction<InputState>>;
  password: PasswordState;
  setPassword: React.Dispatch<React.SetStateAction<PasswordState>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  passwordRegex: RegExp;
  user: { id: string; password: string };
  onLogin: () => void;
  onJoin: () => void;
}
