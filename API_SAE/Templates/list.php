<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Liste des étudiants</title>
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Liste des étudiants</h1>
        
        <?php if (!empty($eleves)) : ?>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Date de naissance</th>
                        <th>Téléphone</th>
                        <th>Ville</th>
                        <th>Code postal</th>
                        <th>NEPH</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($eleves as $rows) : ?>
                        <tr>
                            <td><?php echo htmlspecialchars($rows['nom']); ?></td>
                            <td><?php echo htmlspecialchars($rows['prenom']); ?></td>
                            <td><?php echo htmlspecialchars($rows['email']); ?></td>
                            <td><?php echo htmlspecialchars($rows['date_naissance']); ?></td>
                            <td><?php echo htmlspecialchars($rows['telephone']); ?></td>
                            <td><?php echo htmlspecialchars($rows['ville']); ?></td>
                            <td><?php echo htmlspecialchars($rows['code_postal']); ?></td>
                            <td><?php echo htmlspecialchars($rows['neph']); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else : ?>
            <p class="alert alert-warning">Aucun étudiant trouvé dans la base de données.</p>
        <?php endif; ?>
    </div>
</body>
</html>
