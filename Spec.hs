spec :: (Show a, Show b) => (a -> b) -> [a] -> IO ()
spec f = putStr . concatMap (++ ",\n") . map example
  where
    example x = "{ in: " ++ show x ++ ", out: " ++ show (f x) ++ " }"
