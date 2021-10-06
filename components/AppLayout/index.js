import styles, { globalStyles } from './styles'

export default function AppLayout ({ children }) {
  return (
    <>
      {children}

      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}
