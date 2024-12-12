-- Drop table if exists
DROP TABLE IF EXISTS public.contacts;

-- Create contacts table
CREATE TABLE public.contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Grant permissions
ALTER TABLE public.contacts OWNER TO postgres;
GRANT ALL ON public.contacts TO postgres;
GRANT USAGE, SELECT ON SEQUENCE contacts_id_seq TO postgres;

-- Create trigger function
CREATE OR REPLACE FUNCTION public.handle_new_contact()
RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at = CURRENT_TIMESTAMP;
    NEW.status = COALESCE(NEW.status, 'new');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS handle_new_contact_trigger ON public.contacts;
CREATE TRIGGER handle_new_contact_trigger
    BEFORE INSERT ON public.contacts
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_contact();
