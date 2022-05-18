const Intern = require('../lib/Intern');

test('creates new Intern object', () => {
    const intern = new Intern('Alex', 1, 'example@email.com', 'UCBerkeley');

    expect(intern.name).toBe('Alex');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('example@email.com');
    expect(intern.school).toBe('UCBerkeley');
});

test('checks Intern name', () => {
    const intern = new Intern('Alex', 1, 'example@email.com', 'UCBerkeley');
    
    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getName()).toBe('Alex');
});

test('checks Intern id', () => {
    const intern = new Intern('Alex', 1, 'example@email.com', 'UCBerkeley');
    
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getId()).toBe(1);
});

test('checks Intern email', () => {
    const intern = new Intern('Alex', 1, 'example@email.com', 'UCBerkeley');
    
    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
    expect(intern.getEmail()).toBe('example@email.com');
});

test('check Intern role', () => {
    const intern = new Intern('Alex', 1, 'example@email.com', 'UCBerkeley');
    
    expect(intern.getRole()).toBe('Intern');
});

test('check Intern school', () => {
    const intern = new Intern('Alex', 1, 'example@email.com', 'UCBerkeley');

    expect(intern.getSchool()).toBe('UCBerkeley');
});