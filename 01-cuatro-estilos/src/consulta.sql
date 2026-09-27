-- El mismo problema en SQL: el ejemplo más común de estilo declarativo.
-- No se dice cómo recorrer la tabla, ni en qué orden, ni si usar un índice.
-- Eso lo decide el motor.

SELECT SUM(e.kg * 12.5 * (1 + COALESCE(r.recargo, 0))) AS total
FROM   embarques e
LEFT JOIN recargos r ON r.tipo = e.tipo
WHERE  e.destino = 'laredo'
  AND  e.kg >= 1000;
