-- Créer la table contacts
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new'
);

-- Créer un index sur l'email pour des recherches plus rapides
CREATE INDEX idx_contacts_email ON contacts(email);

-- Créer une fonction pour vérifier le format de l'email
CREATE OR REPLACE FUNCTION validate_email(email TEXT) 
RETURNS BOOLEAN AS $$
BEGIN
    RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$';
END;
$$ LANGUAGE plpgsql;

-- Ajouter une contrainte de validation d'email
ALTER TABLE contacts 
ADD CONSTRAINT valid_email 
CHECK (validate_email(email));
