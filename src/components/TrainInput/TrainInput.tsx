import { DetailedHTMLProps, FC } from "react"

type TrainInputType = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const TrainInput: FC<TrainInputType> = (props) => <input {...props} />
